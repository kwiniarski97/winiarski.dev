export enum LocalStorageKey {
  THEME = 'theme',
}

export const ls = {
  getItem<T>(key: LocalStorageKey): T | null {
    if (localStorage == null) {
      return null;
    }
    const value = localStorage.getItem(key);
    if (!value) {
      return null;
    }
    try {
      return JSON.parse(value) as T;
    } catch (e) {
      return value as any;
    }
  },
  saveItem(key: LocalStorageKey, value: any): void {
    let stringifiedValue = JSON.stringify(value);
    localStorage.setItem(key, stringifiedValue);
  },
};
