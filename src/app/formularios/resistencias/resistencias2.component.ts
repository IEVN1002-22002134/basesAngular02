export class Resistencias2Component {

  bandas = [
    { nombre: 'Negro', valor: 0, color: 'black' },
    { nombre: 'Café', valor: 1, color: 'brown' },
    { nombre: 'Rojo', valor: 2, color: 'red' },
    { nombre: 'Naranja', valor: 3, color: 'orange' },
    { nombre: 'Amarillo', valor: 4, color: 'yellow' },
    { nombre: 'Verde', valor: 5, color: 'green' },
    { nombre: 'Azul', valor: 6, color: 'blue' },
    { nombre: 'Morado', valor: 7, color: 'purple' },
    { nombre: 'Gris', valor: 8, color: 'gray' },
    { nombre: 'Blanco', valor: 9, color: 'white' },
  ];

  multiplicadores = [
    { nombre: 'x1', valor: 1, color: 'black' },
    { nombre: 'x10', valor: 10, color: 'brown' },
    { nombre: 'x100', valor: 100, color: 'red' },
    { nombre: 'x1k', valor: 1000, color: 'orange' },
    { nombre: 'x10k', valor: 10000, color: 'yellow' },
    { nombre: 'x100k', valor: 100000, color: 'green' },
    { nombre: 'x1M', valor: 1000000, color: 'blue' },
    { nombre: 'x10M', valor: 10000000, color: 'purple' },
    { nombre: 'x10M', valor: 1000000000, color: 'gray' },
    { nombre: 'x10M', valor: 1000000000, color: 'white' },
  ];

  tolerancias = [
    { nombre: 'Dorado5%', valor: 0.05 },
    { nombre: 'Plata 10%', valor: 0.1 },
  ];

  calcular(color1: {nombre: string, valor: number, color: string},
           color2: {nombre: string, valor: number, color: string},
           color3: {nombre: string, valor: number, color: string},
           tolerancia: {nombre: string, valor: number}) {

    const base = (parseInt(color1.valor + '') * 10 + parseInt(color2.valor + '')) * parseFloat(color3.valor + '');
    return {
      valor: base,
      valorMax: base * (1 + parseFloat(tolerancia.valor + '')),
      valorMin: base * (1 - parseFloat(tolerancia.valor + ''))
    };
  }
}
