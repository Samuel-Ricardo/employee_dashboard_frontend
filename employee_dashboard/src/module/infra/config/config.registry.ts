export const CONFIG_REGISTRY = {
  CONFIG: Symbol.for('MODULE::INFRA::CONFIG'),
  ENV: Symbol.for('MODULE::INFRA::CONFIG::ENV'),
  API: {
    URL: Symbol.for('MODULE::INFRA::CONFIG::DATABASE::URL'),
  },
};
