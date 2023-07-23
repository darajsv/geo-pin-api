import plansRepository from '../repositories/plans.repository.js';

export const detailPlan = async (planId) => {
  const plan = await plansRepository.findByCodeWithPins(planId);

  return { statusCode: 200, body: JSON.stringify(plan, null, 2) };
};
