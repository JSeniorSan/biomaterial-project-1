export interface Info_blockInterface {
  id: number;
  value: string;
  pic: string | null;
}

export interface TheoryInterface {
  id: number;
  title: string;
  info_block: Info_blockInterface[];
}
