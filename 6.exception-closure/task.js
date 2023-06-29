function parseCount(value) {
    if (Number.isNaN(Number.parseFloat(value))) {
      throw new Error("Невалидное значение");
    }
    return parseFloat(value);
  }
  
  function validateCount(value) {
    try {
      return parseCount(value);
    } catch (error) {
      return error;
    }
  }
  class Triangle {
    constructor(firstSide, secondSide, thirdSide) {
      if (
        firstSide + secondSide <= thirdSide ||
        firstSide + thirdSide <= secondSide ||
        secondSide + thirdSide <= firstSide
      ) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
      this.firstSide = firstSide;
      this.secondSide = secondSide;
      this.thirdSide = thirdSide;
    }
  
    get perimeter() {
      return this.firstSide + this.secondSide + this.thirdSide;
    }
  
    get area() {
      const semiPerimeter = this.perimeter / 2;
      const area = Math.sqrt(
        semiPerimeter *
          (semiPerimeter - this.firstSide) *
          (semiPerimeter - this.secondSide) *
          (semiPerimeter - this.thirdSide)
      ).toFixed(3);
      return Number(area);
    }
  }
  
  function getTriangle(firstSide, secondSide, thirdSide) {
    try {
      return new Triangle(firstSide, secondSide, thirdSide);
    } catch (error) {
      return {
        get perimeter() {
          return "Ошибка! Треугольник не существует";
        },
        get area() {
          return "Ошибка! Треугольник не существует";
        },
      };
    }
  }