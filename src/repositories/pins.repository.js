import { Pin } from "../models/index.js";


class PinsRepository {
  bulkCreate(pins) {
    return Pin.bulkCreate(pins, {plain: true})
  }
  create(pin) {
    return Pin.create(pin);
  }

  findById(id) {
    return Pin.findByPk(id);
  }

  findAll() {
    return Pin.findAll();
  }

  update(id, pin) {
    return Pin.update(pin, {
      where: { id },
    });
  }

  delete(id) {
    return Pin.destroy({
      where: { id },
    });
  }

  bulkDelete(ids) {
    return Pin.destroy({
      where: { id: ids },
    });
  }
}

export default new PinsRepository();
