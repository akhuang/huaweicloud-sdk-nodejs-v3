

export class JarPackageHostInfo {
    private 'agent_id'?: string;
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    private 'file_name'?: string;
    public name?: string;
    public catalogue?: string;
    private 'file_type'?: string;
    public version?: string;
    public path?: string;
    public hash?: string;
    public size?: number;
    public uid?: number;
    public gid?: number;
    public mode?: string;
    public pid?: number;
    private 'proc_path'?: string;
    private 'container_id'?: string;
    private 'container_name'?: string;
    private 'package_path'?: string;
    private 'is_embedded'?: number;
    private 'record_time'?: number;
    public constructor() { 
    }
    public withAgentId(agentId: string): JarPackageHostInfo {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withHostId(hostId: string): JarPackageHostInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): JarPackageHostInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIp(hostIp: string): JarPackageHostInfo {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withFileName(fileName: string): JarPackageHostInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withName(name: string): JarPackageHostInfo {
        this['name'] = name;
        return this;
    }
    public withCatalogue(catalogue: string): JarPackageHostInfo {
        this['catalogue'] = catalogue;
        return this;
    }
    public withFileType(fileType: string): JarPackageHostInfo {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
    public withVersion(version: string): JarPackageHostInfo {
        this['version'] = version;
        return this;
    }
    public withPath(path: string): JarPackageHostInfo {
        this['path'] = path;
        return this;
    }
    public withHash(hash: string): JarPackageHostInfo {
        this['hash'] = hash;
        return this;
    }
    public withSize(size: number): JarPackageHostInfo {
        this['size'] = size;
        return this;
    }
    public withUid(uid: number): JarPackageHostInfo {
        this['uid'] = uid;
        return this;
    }
    public withGid(gid: number): JarPackageHostInfo {
        this['gid'] = gid;
        return this;
    }
    public withMode(mode: string): JarPackageHostInfo {
        this['mode'] = mode;
        return this;
    }
    public withPid(pid: number): JarPackageHostInfo {
        this['pid'] = pid;
        return this;
    }
    public withProcPath(procPath: string): JarPackageHostInfo {
        this['proc_path'] = procPath;
        return this;
    }
    public set procPath(procPath: string  | undefined) {
        this['proc_path'] = procPath;
    }
    public get procPath(): string | undefined {
        return this['proc_path'];
    }
    public withContainerId(containerId: string): JarPackageHostInfo {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withContainerName(containerName: string): JarPackageHostInfo {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withPackagePath(packagePath: string): JarPackageHostInfo {
        this['package_path'] = packagePath;
        return this;
    }
    public set packagePath(packagePath: string  | undefined) {
        this['package_path'] = packagePath;
    }
    public get packagePath(): string | undefined {
        return this['package_path'];
    }
    public withIsEmbedded(isEmbedded: number): JarPackageHostInfo {
        this['is_embedded'] = isEmbedded;
        return this;
    }
    public set isEmbedded(isEmbedded: number  | undefined) {
        this['is_embedded'] = isEmbedded;
    }
    public get isEmbedded(): number | undefined {
        return this['is_embedded'];
    }
    public withRecordTime(recordTime: number): JarPackageHostInfo {
        this['record_time'] = recordTime;
        return this;
    }
    public set recordTime(recordTime: number  | undefined) {
        this['record_time'] = recordTime;
    }
    public get recordTime(): number | undefined {
        return this['record_time'];
    }
}