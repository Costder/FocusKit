import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, Pressable, StyleSheet, SafeAreaView, StatusBar as RNStatusBar, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { getTheme } from './src/theme';
import {
  AppState,
  Settings,
  Task,
  defaultState,
  loadState,
  saveState,
  todayKey,
} from './src/storage';
import FocusScreen from './src/screens/FocusScreen';
import TasksScreen from './src/screens/TasksScreen';
import ProgressScreen from './src/screens/ProgressScreen';

type Tab = 'focus' | 'tasks' | 'progress';

const TABS: { key: Tab; label: string }[] = [
  { key: 'focus', label: 'Focus' },
  { key: 'tasks', label: 'Tasks' },
  { key: 'progress', label: 'Progress' },
];

function newId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

export default function App() {
  const [state, setState] = useState<AppState>(defaultState);
  const [loaded, setLoaded] = useState(false);
  const [tab, setTab] = useState<Tab>('focus');

  const theme = useMemo(() => getTheme(state.settings.highContrast), [state.settings.highContrast]);

  useEffect(() => {
    loadState().then((s) => {
      setState(s);
      setLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (loaded) saveState(state);
  }, [state, loaded]);

  const addTask = (title: string) =>
    setState((s) => ({
      ...s,
      tasks: [{ id: newId(), title, done: false, createdAt: Date.now() }, ...s.tasks],
    }));

  const toggleTask = (id: string) =>
    setState((s) => ({
      ...s,
      tasks: s.tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
      focusedTaskId: s.focusedTaskId === id ? null : s.focusedTaskId,
    }));

  const focusTask = (id: string) => {
    setState((s) => ({ ...s, focusedTaskId: id }));
    setTab('focus');
  };

  const clearFocus = () => setState((s) => ({ ...s, focusedTaskId: null }));

  const completeSession = (minutes: number) =>
    setState((s) => ({
      ...s,
      sessions: [...s.sessions, { date: todayKey(), minutes, at: Date.now() }],
    }));

  const toggleSetting = (key: keyof Settings) =>
    setState((s) => ({ ...s, settings: { ...s.settings, [key]: !s.settings[key] } }));

  const focusedTask: Task | null =
    state.tasks.find((t) => t.id === state.focusedTaskId && !t.done) ?? null;

  if (!loaded) {
    return <View style={{ flex: 1, backgroundColor: theme.colors.bg }} />;
  }

  return (
    <SafeAreaView style={[styles.root, { backgroundColor: theme.colors.bg }]}>
      <StatusBar style="light" />
      <View style={[styles.header, { paddingTop: Platform.OS === 'android' ? (RNStatusBar.currentHeight ?? 0) + 8 : 8 }]}>
        <Text style={[styles.brand, { color: theme.colors.text, fontSize: theme.font.lg }]}>
          Focus<Text style={{ color: theme.colors.primary }}>Kit</Text>
        </Text>
      </View>

      <View style={{ flex: 1 }}>
        {tab === 'focus' && (
          <FocusScreen
            theme={theme}
            settings={state.settings}
            focusedTask={focusedTask}
            onComplete={completeSession}
            onClearFocus={clearFocus}
          />
        )}
        {tab === 'tasks' && (
          <TasksScreen
            theme={theme}
            tasks={state.tasks}
            focusedTaskId={state.focusedTaskId}
            onAdd={addTask}
            onToggle={toggleTask}
            onFocus={focusTask}
          />
        )}
        {tab === 'progress' && (
          <ProgressScreen
            theme={theme}
            sessions={state.sessions}
            settings={state.settings}
            onToggleSetting={toggleSetting}
          />
        )}
      </View>

      <View style={[styles.tabBar, { backgroundColor: theme.colors.surface, borderTopColor: theme.colors.border }]}>
        {TABS.map((t) => {
          const active = t.key === tab;
          return (
            <Pressable
              key={t.key}
              onPress={() => setTab(t.key)}
              style={[styles.tabBtn, { minHeight: theme.touch }]}
            >
              <Text
                style={{
                  color: active ? theme.colors.primary : theme.colors.textMuted,
                  fontSize: theme.font.md,
                  fontWeight: active ? '700' : '500',
                }}
              >
                {t.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  header: { paddingHorizontal: 20, paddingBottom: 8, alignItems: 'flex-start' },
  brand: { fontWeight: '800', letterSpacing: 0.5 },
  tabBar: { flexDirection: 'row', borderTopWidth: 1 },
  tabBtn: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 8 },
});
