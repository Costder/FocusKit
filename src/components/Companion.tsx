// Companion — a lightweight BODY-DOUBLING presence.
// Body doubling = working alongside someone so you start and stay started.
// v1 is a calm, breathing on-screen presence + rotating encouragement.
// (No live video in v1 — honest scope. The point is "you're not alone right now.")
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Animated, StyleSheet, Easing } from 'react-native';
import { Theme } from '../theme';

type Props = {
  active: boolean;
  reduceMotion: boolean;
  theme: Theme;
};

const LINES = [
  "I'm right here with you.",
  "We're doing this together.",
  "Just this one thing, for now.",
  "You showed up. That's the hard part.",
  "Small steps still count.",
  "Breathe. Keep going.",
];

export default function Companion({ active, reduceMotion, theme }: Props) {
  const scale = useRef(new Animated.Value(1)).current;
  const [line, setLine] = useState(LINES[0]);

  useEffect(() => {
    if (!active || reduceMotion) {
      scale.setValue(1);
      return;
    }
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(scale, { toValue: 1.18, duration: 2600, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
        Animated.timing(scale, { toValue: 1.0, duration: 2600, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [active, reduceMotion, scale]);

  useEffect(() => {
    if (!active) return;
    setLine(LINES[Math.floor(Math.random() * LINES.length)]);
    const id = setInterval(() => {
      setLine(LINES[Math.floor(Math.random() * LINES.length)]);
    }, 18000);
    return () => clearInterval(id);
  }, [active]);

  return (
    <View style={styles.wrap}>
      <Animated.View
        style={[
          styles.dot,
          {
            backgroundColor: theme.colors.primarySoft,
            borderColor: theme.colors.primary,
            transform: [{ scale }],
          },
        ]}
      >
        <View style={[styles.core, { backgroundColor: theme.colors.primary }]} />
      </Animated.View>
      <Text style={[styles.line, { color: theme.colors.textMuted, fontSize: theme.font.md }]}>
        {active ? line : 'Ready when you are.'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { alignItems: 'center', marginBottom: 12 },
  dot: {
    width: 84,
    height: 84,
    borderRadius: 42,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  core: { width: 26, height: 26, borderRadius: 13 },
  line: { marginTop: 18, textAlign: 'center' },
});
