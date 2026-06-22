// VisualTimer — a TIME-BLINDNESS aid.
// ADHD brains struggle to *feel* time passing. So we don't just show digits:
// a large bar visibly depletes, and the color shifts as the session winds down.
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Theme } from '../theme';

type Props = {
  remaining: number; // seconds
  duration: number; // seconds
  theme: Theme;
};

function fmt(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function VisualTimer({ remaining, duration, theme }: Props) {
  const pct = duration > 0 ? Math.max(0, Math.min(1, remaining / duration)) : 0;
  const elapsedPct = Math.round((1 - pct) * 100);
  // Calm primary while there's lots of time; gentle warm as it runs low.
  const barColor = pct > 0.25 ? theme.colors.primary : theme.colors.warn;

  return (
    <View style={styles.wrap}>
      <Text style={[styles.time, { color: theme.colors.text, fontSize: theme.font.huge }]}>
        {fmt(remaining)}
      </Text>
      <View
        style={[
          styles.track,
          { backgroundColor: theme.colors.surfaceAlt, borderRadius: theme.radius },
        ]}
        accessibilityLabel={`${elapsedPct} percent of your session is done`}
      >
        <View
          style={{
            width: `${pct * 100}%`,
            height: '100%',
            backgroundColor: barColor,
            borderRadius: theme.radius,
          }}
        />
      </View>
      <Text style={[styles.caption, { color: theme.colors.textMuted, fontSize: theme.font.sm }]}>
        {elapsedPct}% done · {fmt(remaining)} left
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { alignItems: 'center', width: '100%' },
  time: { fontWeight: '700', fontVariant: ['tabular-nums'], letterSpacing: 1 },
  track: { width: '100%', height: 22, overflow: 'hidden', marginTop: 16 },
  caption: { marginTop: 10 },
});
