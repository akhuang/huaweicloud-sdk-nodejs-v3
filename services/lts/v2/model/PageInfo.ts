

export class PageInfo {
    private 'next_marker'?: string;
    private 'previous_marker'?: string;
    private 'current_count'?: string;
    public constructor(nextMarker?: string, previousMarker?: string, currentCount?: string) { 
        this['next_marker'] = nextMarker;
        this['previous_marker'] = previousMarker;
        this['current_count'] = currentCount;
    }
    public withNextMarker(nextMarker: string): PageInfo {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: string  | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker(): string | undefined {
        return this['next_marker'];
    }
    public withPreviousMarker(previousMarker: string): PageInfo {
        this['previous_marker'] = previousMarker;
        return this;
    }
    public set previousMarker(previousMarker: string  | undefined) {
        this['previous_marker'] = previousMarker;
    }
    public get previousMarker(): string | undefined {
        return this['previous_marker'];
    }
    public withCurrentCount(currentCount: string): PageInfo {
        this['current_count'] = currentCount;
        return this;
    }
    public set currentCount(currentCount: string  | undefined) {
        this['current_count'] = currentCount;
    }
    public get currentCount(): string | undefined {
        return this['current_count'];
    }
}