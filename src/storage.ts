// Local-first persistence. Everything stays on the device.
// No account, no network, no analytics — that is the whole point.
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Task = {
  id: string;
  title: string;
  done: boolean;
  createdAt: number;
};

export type Settings = {
  highContrast: boolean;
  reduceMotion: boolean;
};

export type FocusSession = {
  date: string; // YYYY-MM-DD
  minutes: number;
  at: number;
};

export type AppState = {
  tasks: Task[];
  settings: Settings;
  sessions: FocusSession[];
  focusedTaskId: string | null;
};

const KEY = 'focuskit/state/v1';

export const defaultState: AppState = {
  tasks: [],
  settings: { highContrast: false, reduceMotion: false },
  sessions: [],
  focusedTaskId: null,
};

export async function loadState(): Promise<AppState> {
  try {
    const raw = await AsyncStorage.getItem(KEY);
    if (!raw) return defaultState;
    const parsed = JSON.parse(raw) as Partial<AppState>;
    return {
      ...defaultState,
      ...parsed,
      settings: { ...defaultState.settings, ...(parsed.settings ?? {}) },
      tasks: parsed.tasks ?? [],
      sessions: parsed.sessions ?? [],
    };
  } catch {
    return defaultState;
  }
}

export async function saveState(state: AppState): Promise<void> {
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // Local write failed — non-fatal; data simply isn't persisted this time.
  }
}

export function todayKey(d = new Date()): string {
  return d.toISOString().slice(0, 10);
}

// Forgiving "show-up" count: how many DISTINCT days had at least one session.
// We never punish streak breaks — we only celebrate showing up.
export function showUpDays(sessions: FocusSession[]): number {
  return new Set(sessions.map((s) => s.date)).size;
}

export function totalMinutes(sessions: FocusSession[]): number {
  return sessions.reduce((sum, s) => sum + s.minutes, 0);
}
