import CompensationRepository from '../../src/repositories/CompensationRepository';
import * as faker from 'faker';
import moment = require('moment');

export const fakerCompensation = async () => {
  const compensationRepository = new CompensationRepository();
  try {
    await compensationRepository.createAndSave(
      faker.random.number().toString(),
      're_ckenexm3f0b6hjq6f6cog8kxz',
      faker.random.number(),
      moment().utc().toDate()
    );
    
    return true;
  } catch (error) {
    console.log(error);
  }
};

fakerCompensation().then((res) => {
  process.exit();
});
