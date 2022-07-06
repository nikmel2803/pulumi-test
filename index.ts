import * as pulumi from "@pulumi/pulumi";
import * as scaleway from "@jaxxstorm/pulumi-scaleway";

const cluster = new scaleway.KubernetesCluster("pulumi-k8s-cluster", {
    version: "1.23.6",
    cni: "cilium",
})

const nodePool = new scaleway.KubernetesNodePool("pulumi-k8s-node-pool", {
    zone: "fr-par-1",
    clusterId: cluster.id,
    nodeType: "DEV1-M",
    size: 2
})

const bucket = new scaleway.ObjectBucket("pulumi-k8s-bucket")