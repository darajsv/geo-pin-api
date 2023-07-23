import plansRepository from '../repositories/plans.repository.js';

export const detailPlan = async (planId) => {
  console.log(planId);
  const plan = await plansRepository.findByCodeWithPins(planId);
  console.log('passei ', plan);
  return { statusCode: 200, body: JSON.stringify(plan, null, 2) };
};
