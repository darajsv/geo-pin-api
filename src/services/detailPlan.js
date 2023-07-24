import plansRepository from '../repositories/plans.repository.js';

export const detailPlan = async (planId) => {
  try {
    const plan = await plansRepository.findByCodeWithPins(planId);
    return { statusCode: 200, body: JSON.stringify(plan, null, 2) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify(error, null, 2) };
  }
};
