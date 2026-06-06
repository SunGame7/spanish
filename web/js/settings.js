// Shared settings — stored in localStorage, read by the practice engine.
// Keys: 'vos' and 'vosotros' — '1' = on (default), '0' = off

const Settings = {
    get(key) { return localStorage.getItem(key) ?? '1'; },
    set(key, val) { localStorage.setItem(key, val); },
    isOn(key) { return this.get(key) !== '0'; }
};
