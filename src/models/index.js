import Plan from './Plans.js';
import Pin from './Pins.js';

Plan.hasMany(Pin, { foreignKey: 'planId', as: 'pins' });
Pin.belongsTo(Plan, { foreignKey: 'planId' });

export { Plan, Pin };
