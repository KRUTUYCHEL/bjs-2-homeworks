function parseCount(value){
  let number = Number.parseFloat(value);
  if(isNaN(number)){
    throw new Error("Невалидное значение")
  }
  return number;
}

function validateCount(value) {
  try {
   return parseCount(value);
  }
  catch (error) {
    return error;
  }
}

class Triangle {
  constructor(a,b,c) {
    if(a+b<c || b+c<a || c+a<b)
      throw new Error('Треугольник с такими сторонами не существует');

    this.a = a;
    this.b = b;
    this.c = c;
  }

  get perimeter(){
    return this.a + this.b + this.c;
  }

  get area() {
    const p = 0.5 * this.perimeter;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return Math.round(area * 1000) / 1000;
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a,b,c);
  } catch(e) {
    const msg = 'Ошибка! Треугольник не существует';
    return {
      get perimeter(){
        return msg;
      },
      get area() {
        return msg;
      }
    };
  }

}
