export default class Validable {
    
    constructor() {
      this.errors = [];
    }
  
    isRequired(value, property, message) {
      if(value) return;
      this.errors.push({ name: property, message });
      return this;
    }

    isNotEquals(value, comparer, property, message) {
        if (value !== comparer) return;
        this.errors.push({ name: property, message });
        return this;
    }

    isEquals(value, comparer, property, message) {
        if (value === comparer) return;
        this.errors.push({ name: property, message });
        return this;
    }

    isLengthBetween(value, min, max, property, message) {
        if (value.length >= min && value.length <= max) return;
        this.errors.push({ name: property, message });
        return this;
    }

    isMaxLength(value, max, property, message) {
        if (value.length <= max) return;
        this.errors.push({ name: property, message });
        return this;
    }

    isMinLength(value, min, property, message) {
        if (value.length >= min) return;
        this.errors.push({ name: property, message });
        return this;
    }
  
    isLengthEquals(value, compare, property, message) {
        if (value.length === compare) return;
        this.errors.push({ name: property, message });
        return this;
    }
  
    isEmail(value, property, message) {
        const reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
        if (reg.test(value)) return;
        this.errors.push({ name: property, message });
        return this;
    }

    isBetween(value, min, max, property, message) {
        if (value >= min && value <= max) return;
        this.errors.push({ name: property, message });
        return this;
    }
  
    isGreaterThan(value, comparer, property, message) {
        if (value > comparer) return; 
        this.errors.push({ name: property, message });
        return this;
    }

    isGreaterThanOrEqualTo(value, comparer, property, message) {
        if (value >= comparer) return;
        this.errors.push({ name: property, message });
        return this;
    }

    isLessThan(value, comparer, property, message) {
        if (value < comparer) return;
        this.errors.push({ name: property, message });
        return this;
    }

    isLessThanOrEqualTo(value, comparer, property, message) {
        if (value <= comparer) return;
        this.errors.push({ name: property, message }); 
        return this;
    }

    isMust(value, validationName, message){
        if(value) return
        this.errors.push({ name: validationName, message });
        return this;
    }

    isValid() {
      return this.errors.length === 0;
    }

    getErrors() {
        return this.errors;
    }
    
  }