var NodePos={};
var ConList=[];
var Importance=[];
/*ConList is 인접행렬, NodePos is 좌표별 뭐시기뭐시기*/
var P = 0.15
var Visited=[]

async function Delay() {
  let myPromise = new Promise(function(resolve, reject) {
    setTimeout(1)
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

function AddNode(x, y){
  NodePos[length(NodePos)] = (x, y)
  ConList.push([])
  Importance.push(0)
  Visited.push(0)
}

function AddVert(node1,node2){
  ConList[node1].push(node2)

  Importance[node2]+=Importance[node1]/length(ConList[node1])
}

function RandomSurferMove(CurrentNode){
  let RandomValue = Math.random();
  if(length(ConList[CurrentNode])==0){
    NodeRandom = RandomSurferMove(NodeRandom)
    return NodeRandom
  }
  if(RandomValue < P){
    return CurrentNode
  }

  RandomValue -= P
  MaxValue = 1 - P;

  MoveTo = floor(length(ConList[CurrentNode])*RandomValue/MaxValue)

  return MovedNode
}

function PageRank(TICKS){
  NodeRandom = floor(length(NodePos)*Math.random());
  for(var i=1;i<=TICKS;i++){
    Delay();
    NodeRandom = RandomSurferMove(NodeRandom)
    Visited[NodeRandom]++;
    for(var j = 0;j < length(Importance); j++){
      Importance[j] = Visited[j]/(i + 1);
    }
  }
}
