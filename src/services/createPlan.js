import plansRepository from '../repositories/plans.repository.js';
import { stringToHash } from '../utils/stringToHash.js';

export const createPlan = async () => {
  const plan = await plansRepository.create();
  const code = stringToHash(plan.id);
  await plansRepository.update(plan.id, { code });
  const createdPlan = await plansRepository.findById(plan.id);

  return { statusCode: 200, body: JSON.stringify(createdPlan, null, 2) };
};
