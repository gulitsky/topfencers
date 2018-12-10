import { prop, Typegoose, ModelType, InstanceType } from 'typegoose';

export enum Weapon {
  EPEE = 'шпага',
  FOIL = 'рапира',
  SABRE = 'сабля',
}

export class Fencer extends Typegoose {
  @prop({ required: true, enum: Weapon })
  weapon: Weapon;
}
