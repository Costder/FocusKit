import React from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView, Switch } from 'react-native';
import { Theme } from '../theme';
import { FocusSession, Settings, showUpDays, totalMinutes, todayKey } from '../storage';

type Props = {
  theme: Theme;
  sessions: FocusSession[];
  settings: Settings;
  onToggleSetting: (key: keyof Settings) => void;
};

function last14(sessions: FocusSession[]): { date: string; active: boolean }[] {
  const active = new Set(sessions.map((s) => s.date));
  const out: { date: string; active: boolean }[] = [];
  for (let i = 13; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = todayKey(d);
    out.push({ date: key, active: active.has(key) });
  }
  return out;
}

export default function ProgressScreen({ theme, sessions, settings, onToggleSetting }: Props) {
  const days = showUpDays(sessions);
  const mins = totalMinutes(sessions);
  const dots = last14(sessions);

  const Stat = ({ value, label }: { value: string; label: string }) => (
    <View style={[styles.stat, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, borderRadius: theme.radius }]}>
      <Text style={{ color: theme.colors.text, fontSize: theme.font.xl, fontWeight: '700' }}>{value}</Text>
      <Text style={{ color: theme.colors.textMuted, fontSize: theme.font.sm, marginTop: 4 }}>{label}</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={{ padding: 20, paddingTop: 8 }}>
      <Text style={[styles.headline, { color: theme.colors.text, fontSize: theme.font.lg }]}>
        You showed up {days} {days === 1 ? 'day' : 'days'}.
      </Text>
      <Text style={[styles.sub, { color: theme.colors.textMuted, fontSize: theme.font.sm }]}>
        No streaks to break here. Every session counts, whenever it happens.
      </Text>

      <View style={styles.statRow}>
        <Stat value={`${sessions.length}`} label="sessions" />
        <Stat value={`${mins}`} label="minutes focused" />
        <Stat value={`${days}`} label="days shown up" />
      </View>

      <Text style={[styles.section, { color: theme.colors.textMuted, fontSize: theme.font.xs }]}>LAST 14 DAYS</Text>
      <View style={styles.dotRow}>
        {dots.map((d) => (
          <View
            key={d.date}
            style={[
              styles.dot,
              {
                backgroundColor: d.active ? theme.colors.success : theme.colors.surfaceAlt,
                borderColor: theme.colors.border,
              },
            ]}
          />
        ))}
      </View>

      <Text style={[styles.section, { color: theme.colors.textMuted, fontSize: theme.font.xs }]}>COMFORT SETTINGS</Text>
      <View style={[styles.settingRow, { borderColor: theme.colors.border, borderRadius: theme.radius }]}>
        <View style={{ flex: 1 }}>
          <Text style={{ color: theme.colors.text, fontSize: theme.font.md }}>High contrast</Text>
          <Text style={{ color: theme.colors.textMuted, fontSize: theme.font.xs, marginTop: 2 }}>Sharper text and edges</Text>
        </View>
        <Switch value={settings.highContrast} onValueChange={() => onToggleSetting('highContrast')} />
      </View>
      <View style={[styles.settingRow, { borderColor: theme.colors.border, borderRadius: theme.radius }]}>
        <View style={{ flex: 1 }}>
          <Text style={{ color: theme.colors.text, fontSize: theme.font.md }}>Reduce motion</Text>
          <Text style={{ color: theme.colors.textMuted, fontSize: theme.font.xs, marginTop: 2 }}>Calms animations</Text>
        </View>
        <Switch value={settings.reduceMotion} onValueChange={() => onToggleSetting('reduceMotion')} />
      </View>

      <Text style={[styles.privacy, { color: theme.colors.textMuted, fontSize: theme.font.xs }]}>
        Everything stays on this device. No account, no ads, no tracking.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headline: { fontWeight: '700' },
  sub: { marginTop: 8, lineHeight: 20 },
  statRow: { flexDirection: 'row', gap: 10, marginTop: 24 },
  stat: { flex: 1, padding: 16, borderWidth: 1, alignItems: 'center' },
  section: { letterSpacing: 1.5, marginTop: 32, marginBottom: 12 },
  dotRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  dot: { width: 22, height: 22, borderRadius: 6, borderWidth: 1 },
  settingRow: { flexDirection: 'row', alignItems: 'center', padding: 16, borderWidth: 1, marginBottom: 12 },
  privacy: { marginTop: 28, textAlign: 'center', lineHeight: 18 },
});
