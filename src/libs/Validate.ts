export default class Validate {
   static required(value: string): boolean {
      return !!value;
   }

   static isDDMMYYYY(value: string): boolean {
      //return /^(([0-2]{1}[1-9]{1})|(3[0-1]{1}))\.((0[1-9]{1})|(1[0-2]{1}))\.([0-9]{4})$/.test(value);
      return /^([0-9]{4})-((0[1-9]{1})|(1[0-2]{1}))-(([0-2]{1}[1-9]{1})|(3[0-1]{1}))$/.test(value);
   }

   static isPhone(value: string) {
      return /^\+380([0-9]{9})$/.test(value);
   }
}