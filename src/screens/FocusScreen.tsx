import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { Theme } from '../theme';
import { Settings, Task } from '../storage';
import VisualTimer from '../components/VisualTimer';
import Companion from '../components/Companion';

type Props = {
  theme: Theme;
  settings: Settings;
  focusedTask: Task | null;
  onComplete: (minutes: number) => void;
  onClearFocus: () => void;
};

const DURATIONS = [5, 15, 25, 45];

export default function FocusScreen({ theme, settings, focusedTask, onComplete, onClearFocus }: Props) {
  const [durationMin, setDurationMin] = useState(25);
  const [remaining, setRemaining] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Keep remaining in sync when the user picks a new duration (while not running).
  useEffect(() => {
    if (!running) setRemaining(durationMin * 60);
  }, [durationMin, running]);

  useEffect(() => {
    if (!running) return;
    intervalRef.current = setInterval(() => {
      setRemaining((r) => Math.max(0, r - 1));
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running]);

  // Completion is handled in its own effect (not inside the tick) so we never
  // update the parent component mid-render.
  useEffect(() => {
    if (running && remaining === 0) {
      setRunning(false);
      onComplete(durationMin);
      setRemaining(durationMin * 60);
    }
  }, [running, remaining, durationMin, onComplete]);

  const reset = () => {
    setRunning(false);
    setRemaining(durationMin * 60);
  };

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={[styles.eyebrow, { color: theme.colors.textMuted, fontSize: theme.font.sm }]}>
        FOCUS SESSION
      </Text>
      <View
        style={[
          styles.focusBanner,
          { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, borderRadius: theme.radius },
        ]}
      >
        <Text style={[styles.focusLabel, { color: theme.colors.textMuted, fontSize: theme.font.xs }]}>
          WORKING ON
        </Text>
        <Text style={[styles.focusTitle, { color: theme.colors.text, fontSize: theme.font.lg }]}>
          {focusedTask ? focusedTask.title : 'Free focus'}
        </Text>
        {focusedTask && (
          <Pressable onPress={onClearFocus} hitSlop={10}>
            <Text style={[styles.clear, { color: theme.colors.primary, fontSize: theme.font.sm }]}>clear</Text>
          </Pressable>
        )}
      </View>

      <Companion active={running} reduceMotion={settings.reduceMotion} theme={theme} />

      <VisualTimer remaining={remaining} duration={durationMin * 60} theme={theme} />

      <View style={styles.chips}>
        {DURATIONS.map((d) => {
          const active = d === durationMin;
          return (
            <Pressable
              key={d}
              onPress={() => setDurationMin(d)}
              disabled={running}
              style={[
                styles.chip,
                {
                  borderColor: active ? theme.colors.primary : theme.colors.border,
                  backgroundColor: active ? theme.colors.primarySoft : 'transparent',
                  borderRadius: theme.radius,
                  opacity: running ? 0.4 : 1,
                },
              ]}
            >
              <Text style={{ color: active ? theme.colors.text : theme.colors.textMuted, fontSize: theme.font.md }}>
                {d}m
              </Text>
            </Pressable>
          );
        })}
      </View>

      <Pressable
        onPress={() => setRunning((r) => !r)}
        style={[styles.primaryBtn, { backgroundColor: theme.colors.primary, borderRadius: theme.radius, minHeight: theme.touch }]}
      >
        <Text style={[styles.primaryBtnText, { fontSize: theme.font.lg }]}>
          {running ? 'Pause' : remaining < durationMin * 60 ? 'Resume' : 'Start'}
        </Text>
      </Pressable>

      <Pressable onPress={reset} style={styles.ghostBtn} hitSlop={10}>
        <Text style={{ color: theme.colors.textMuted, fontSize: theme.font.md }}>Reset</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 20, paddingTop: 8, alignItems: 'center' },
  eyebrow: { letterSpacing: 2, marginBottom: 12, alignSelf: 'flex-start' },
  focusBanner: { width: '100%', padding: 16, borderWidth: 1, marginBottom: 24 },
  focusLabel: { letterSpacing: 1.5, marginBottom: 4 },
  focusTitle: { fontWeight: '600' },
  clear: { marginTop: 8 },
  chips: { flexDirection: 'row', gap: 10, marginTop: 28, marginBottom: 28 },
  chip: { paddingVertical: 12, paddingHorizontal: 18, borderWidth: 1, minWidth: 56, alignItems: 'center' },
  primaryBtn: { width: '100%', alignItems: 'center', justifyContent: 'center', paddingVertical: 16 },
  primaryBtnText: { color: '#0f1226', fontWeight: '700' },
  ghostBtn: { marginTop: 16, padding: 12 },
});
