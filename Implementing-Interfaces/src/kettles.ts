interface Kettle {
  volume: number;
}

interface KettleConstructor {
  new (volume: number): Kettle;
}

class TeaKettle implements Kettle {
  volume: number;
  constructor(volume: number) {}
}

class ElectricKettle implements Kettle {
  volume: number;
  constructor(volume: number) {}
}

function kettleFactory(KettleClass: KettleConstructor) {
  const kettle = new KettleClass(2);
  // test it
  // pack it
  return kettle;
}

const teaKettle = kettleFactory(TeaKettle);
const electricKettle = kettleFactory(ElectricKettle);
