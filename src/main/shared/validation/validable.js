export default class Validable {
    
    constructor() {
      this.errors = [];
    }
  
    isRequired(value, property, message) {
      if(value) return;
      this.errors.push({ name: property, message });
    }

    isNotEquals(value, comparer, property, message) {
        if (value !== comparer) return;
        this.errors.push({ name: property, message });
    }

    isEquals(value, comparer, property, message) {
        if (value === comparer) return;
        this.errors.push({ name: property, message });
    }

    isLengthBetween(value, min, max, property, message) {
        if (value.length >= min && value.length <= max) return;
        this.errors.push({ name: property, message });
    }

    isMaxLength(value, max, property, message) {
        if (value.length <= max) return;
        this.errors.push({ name: property, message });
    }

    isMinLength(value, min, property, message) {
        if (value.length >= min) return;
        this.errors.push({ name: property, message });
    }
  
    isLengthEquals(value, compare, property, message) {
        if (value.length === compare) return;
        this.errors.push({ name: property, message });
    }
  
    isEmail(value, property, message) {
        const reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
        if (reg.test(value)) return;
        this.errors.push({ name: property, message });
    }

    isBetween(value, min, max, property, message) {
        if (value >= min && value <= max) return;
        this.errors.push({ name: property, message });
    }
  
    isGreaterThan(value, comparer, property, message) {
        if (value > comparer) return; 
        this.errors.push({ name: property, message });
    }

    isGreaterThanOrEqualTo(value, comparer, property, message) {
        if (value >= comparer) return;
        this.errors.push({ name: property, message });
    }

    isLessThan(value, comparer, property, message) {
        if (value < comparer) return;
        this.errors.push({ name: property, message });
    }

    isLessThanOrEqualTo(value, comparer, property, message) {
        if (value <= comparer) return;
        this.errors.push({ name: property, message }); 
    }

    isMust(value, validationName, message){
        if(value) return
        this.errors.push({ name: validationName, message });
    }

    isValid() {
      return this.errors.length === 0;
    }

    getErrors() {
        return this.errors;
    }
    
  }