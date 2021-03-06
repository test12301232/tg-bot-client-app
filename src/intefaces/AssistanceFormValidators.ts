export interface AssistanceFormValidators {
   valid: boolean,
   fio: {
      value: string,
      validators: {
         required: () => boolean,
      },
      valid: boolean,
      touched: boolean,
      errors: {
         required: boolean,
      },
      blur: () => boolean;
   },
   phone: {
      value: string,
      validators: {
         required: () => boolean,
         isPhone: () => boolean,
      },
      valid: boolean,
      touched: boolean,
      errors: {
         required: boolean,
         isPhone: boolean,
      },
      blur: () => boolean;
   },
   birth: {
      value: string,
      validators: {
         required: () => boolean,
         isDDMMYYYY: () => boolean,
      },
      valid: boolean,
      touched: boolean,
      errors: {
         required: boolean,
         isDDMMYYYY: boolean,
      },
      blur: () => boolean;
   },
   addr: {
      value: string,
      validators: {
         required: () => boolean,
      },
      valid: boolean,
      touched: boolean,
      errors: {
         required: boolean,
      },
      blur: () => boolean;
   },
   people_num: {
      value: string,
      validators: {
         required: () => boolean,
      },
      valid: boolean,
      touched: boolean,
      errors: {
         required: boolean,
      },
      blur: () => boolean;
   },
   people_fio: {
      value: Array<string>,
      valid: boolean,
      touched: boolean,
      blur: () => boolean;
   },
   invalids: {
      value: boolean,
      valid: boolean,
      touched: boolean,
      blur: () => boolean;
   },
   children: {
      value: boolean,
      valid: boolean,
      touched: boolean,
      blur: () => boolean;
   },
   children_age: {
      value: Array<string>,
      valid: boolean,
      touched: boolean,
      blur: () => boolean;
   },
   food: {
      value: boolean,
      valid: boolean,
      touched: boolean,
      blur: () => boolean;
   },
   water: {
      value: boolean,
      valid: boolean,
      touched: boolean,
      blur: () => boolean;
   },
   drugs: {
      value: boolean,
      valid: boolean,
      touched: boolean,
      blur: () => boolean;
   },
   products_detail: {
      value: string,
      valid: boolean,
      touched: boolean,
      blur: () => boolean;
   },
   gigien: {
      value: boolean,
      valid: boolean,
      touched: boolean,
      blur: () => boolean;
   },
   gigien_num: {
      value: string,
      valid: boolean,
      touched: boolean,
      blur: () => boolean;
   },
   pampers: {
      value: string,
      valid: boolean,
      touched: boolean,
      blur: () => boolean;
   },
   diet: {
      value: string,
      valid: boolean,
      touched: boolean,
      blur: () => boolean;
   },
   pers_data_agreement: {
      value: boolean,
      valid: boolean,
      touched: boolean,
      blur: () => boolean;
   },
   photo_agreement: {
      value: boolean,
      valid: boolean,
      touched: boolean,
      blur: () => boolean;
   },
}