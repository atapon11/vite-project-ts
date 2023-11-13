class BMICalculator {
    calculateBMI(weightInKg: number, heightInCentimeters: number): number | string {
      // แปลงจากเซนติเมตรเป็นเมตร
      const heightInMeters: number = heightInCentimeters / 100;
  
      if (heightInMeters <= 0 || weightInKg <= 0) {
        return "Invalid input. Weight and height must be positive values.";
      }
  
      const bmi: number = weightInKg / (heightInMeters * heightInMeters);
      return bmi;
    }
  
    interpretBMI(bmi: number): string {
      if (bmi < 18.5) {
        return "ผอมแห้ง";
      } else if (bmi < 24.9) {
        return "ปกติแล้ว";
      } else if (bmi < 29.9) {
        return "ไอ้อ้วน";
      } else {
        return "โครตอ้วน";
      }
    }
  }
  
  export default BMICalculator;
  