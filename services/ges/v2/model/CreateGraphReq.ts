import { CreateGraphReqGraph } from './CreateGraphReqGraph';


export class CreateGraphReq {
    public graph?: CreateGraphReqGraph;
    public constructor(graph?: CreateGraphReqGraph) { 
        this['graph'] = graph;
    }
    public withGraph(graph: CreateGraphReqGraph): CreateGraphReq {
        this['graph'] = graph;
        return this;
    }
}