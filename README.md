# BenchmarkCJ-A
This repo contains snippets for an the Benchmark Comparative Judgement item selection algorithm for [the D-PAC project]
(https://github.com/d-pac)

## NearestCuttingPoint.js
The function accepts the 'Ability' of selected in logits and a queue (Array) of benchmark items and then:
    1. Pseudo-randomises the queue
    2. sorts the queue ascending by 'Ability'
    3. and retains the first element as opponent