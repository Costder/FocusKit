import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, FlatList } from 'react-native';
import { Theme } from '../theme';
import { Task } from '../storage';

type Props = {
  theme: Theme;
  tasks: Task[];
  focusedTaskId: string | null;
  onAdd: (title: string) => void;
  onToggle: (id: string) => void;
  onFocus: (id: string) => void;
};

export default function TasksScreen({ theme, tasks, focusedTaskId, onAdd, onToggle, onFocus }: Props) {
  const [text, setText] = useState('');

  const submit = () => {
    const t = text.trim();
    if (!t) return;
    onAdd(t);
    setText(''); // stay on screen, keep momentum — no modal, no extra fields
  };

  const open = tasks.filter((t) => !t.done);
  const done = tasks.filter((t) => t.done);

  return (
    <View style={styles.wrap}>
      <View
        style={[
          styles.inputRow,
          { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, borderRadius: theme.radius },
        ]}
      >
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="One thing on your mind…"
          placeholderTextColor={theme.colors.textMuted}
          style={[styles.input, { color: theme.colors.text, fontSize: theme.font.md }]}
          onSubmitEditing={submit}
          returnKeyType="done"
          blurOnSubmit={false}
        />
        <Pressable
          onPress={submit}
          style={[styles.addBtn, { backgroundColor: theme.colors.primary, borderRadius: theme.radius - 6 }]}
        >
          <Text style={{ color: '#0f1226', fontWeight: '700', fontSize: theme.font.lg }}>+</Text>
        </Pressable>
      </View>

      <FlatList
        data={[...open, ...done]}
        keyExtractor={(t) => t.id}
        contentContainerStyle={{ paddingVertical: 16, paddingBottom: 40 }}
        ListEmptyComponent={
          <Text style={[styles.empty, { color: theme.colors.textMuted, fontSize: theme.font.md }]}>
            Nothing here yet. Add the one thing you keep thinking about.
          </Text>
        }
        renderItem={({ item }) => {
          const isFocused = item.id === focusedTaskId;
          return (
            <View
              style={[
                styles.task,
                { borderColor: isFocused ? theme.colors.primary : theme.colors.border, borderRadius: theme.radius },
              ]}
            >
              <Pressable onPress={() => onToggle(item.id)} hitSlop={10} style={styles.check}>
                <View
                  style={[
                    styles.circle,
                    {
                      borderColor: theme.colors.primary,
                      backgroundColor: item.done ? theme.colors.primary : 'transparent',
                    },
                  ]}
                />
              </Pressable>
              <Text
                style={[
                  styles.taskText,
                  {
                    color: item.done ? theme.colors.textMuted : theme.colors.text,
                    textDecorationLine: item.done ? 'line-through' : 'none',
                    fontSize: theme.font.md,
                  },
                ]}
              >
                {item.title}
              </Text>
              {!item.done && (
                <Pressable onPress={() => onFocus(item.id)} hitSlop={8}>
                  <Text style={{ color: theme.colors.primary, fontSize: theme.font.sm }}>
                    {isFocused ? '★ focus' : 'focus'}
                  </Text>
                </Pressable>
              )}
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, padding: 20, paddingTop: 8 },
  inputRow: { flexDirection: 'row', alignItems: 'center', padding: 8, borderWidth: 1 },
  input: { flex: 1, paddingHorizontal: 12, paddingVertical: 12 },
  addBtn: { width: 48, height: 48, alignItems: 'center', justifyContent: 'center' },
  empty: { textAlign: 'center', marginTop: 48, paddingHorizontal: 24, lineHeight: 24 },
  task: { flexDirection: 'row', alignItems: 'center', gap: 14, padding: 16, borderWidth: 1, marginBottom: 12 },
  check: { padding: 2 },
  circle: { width: 26, height: 26, borderRadius: 13, borderWidth: 2 },
  taskText: { flex: 1 },
});
