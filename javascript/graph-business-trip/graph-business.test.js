'use strict';

const {Graph,business} = require('./graph-business-trip');



describe('test graph-business-trip' ,() => {
  it('test if Arendelle,Metroville business trip = 150',() => {
    const graph = new Graph();

    graph.addNode('Pandora');
    graph.addNode('Arendelle');
    graph.addNode('Metroville');
    graph.addNode('Monstroplolis');
    graph.addNode('Narnia');
    graph.addNode('Naboo');

    graph.addEdge('Pandora', 'Arendelle', 150);
    graph.addEdge('Metroville', 'Pandora', 82);
    graph.addEdge('Arendelle', 'Metroville', 99);
    graph.addEdge('Arendelle', 'Monstroplolis', 42);
    graph.addEdge('Metroville', 'Monstroplolis', 150);
    graph.addEdge('Metroville', 'Narnia', 37);
    graph.addEdge('Metroville', 'Naboo', 26);
    graph.addEdge('Monstroplolis', 'Naboo', 73);
    graph.addEdge('Narnia', 'Naboo', 250);

    expect(business(graph,['Arendelle', 'Metroville'])).toEqual('$ 99');

  });

  it('return null when there is no trip',() => {
    const graph = new Graph();

    graph.addNode('Pandora');
    graph.addNode('Arendelle');
    graph.addNode('Metroville');
    graph.addNode('Monstroplolis');
    graph.addNode('Narnia');
    graph.addNode('Naboo');

    graph.addEdge('Pandora', 'Arendelle', 150);
    graph.addEdge('Metroville', 'Pandora', 82);
    graph.addEdge('Arendelle', 'Metroville', 99);
    graph.addEdge('Arendelle', 'Monstroplolis', 42);
    graph.addEdge('Metroville', 'Monstroplolis', 150);
    graph.addEdge('Metroville', 'Narnia', 37);
    graph.addEdge('Metroville', 'Naboo', 26);
    graph.addEdge('Monstroplolis', 'Naboo', 73);
    graph.addEdge('Narnia', 'Naboo', 250);

    expect(business(graph,['Monstroplolis','Pandora'])).toEqual('null');
  });

  it('return null when there is no trip btween more than two cities ',() => {

    const graph = new Graph();

    graph.addNode('Pandora');
    graph.addNode('Arendelle');
    graph.addNode('Metroville');
    graph.addNode('Monstroplolis');
    graph.addNode('Narnia');
    graph.addNode('Naboo');

    graph.addEdge('Pandora', 'Arendelle', 150);
    graph.addEdge('Metroville', 'Pandora', 82);
    graph.addEdge('Arendelle', 'Metroville', 99);
    graph.addEdge('Arendelle', 'Monstroplolis', 42);
    graph.addEdge('Metroville', 'Monstroplolis', 150);
    graph.addEdge('Metroville', 'Narnia', 37);
    graph.addEdge('Metroville', 'Naboo', 26);
    graph.addEdge('Monstroplolis', 'Naboo', 73);
    graph.addEdge('Narnia', 'Naboo', 250);

    expect(business(graph,['Narnia', 'Arendelle', 'Naboo'])).toEqual('null');

  });
});
