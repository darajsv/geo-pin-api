import { Pin, Plan } from "../models/index.js";


class PlansRepository {
  create(plan) {
    return Plan.create(plan, {plain: true});
  }

  findById(id) {
    return Plan.findByPk(id, {
      plain: true
    });
  }
  
  findByCode(code){
    return Plan.findOne( {
      where: {code},
      plain: true
    });
  }

  findByCodeWithPins(code) {
    return Plan.findOne( {
      where: {code},
      include: [{
        model: Pin,
        as: 'pins',
        required: false
      }],
      plain: true
    });
  }

  findAll() {
    return Plan.findAll();
  }

  update(id, plan) {
    return Plan.update(plan, {
      where: { id },
      returning: true,
      plain: true,
    });
  }

  delete(id) {
    return Plan.destroy({
      where: { id },
    });
  }
}

export default new PlansRepository();
