import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

export class Config {
  ghApiKey: string | null = null;
  editorCommand = "code";
}

export class ConfigRepo {
  private db: lowdb;
  constructor() {
    const adapter = new FileSync("config.json");
    this.db = lowdb(adapter);

    //console.log(Config)
    this.db.defaults(new Config()).write();
  }

  set(key: keyof Config, val: string) {
    this.db.set(key, val).write();
  }

  get(key: keyof Config): string | null {
    const val = this.db.get(key).value();
    return val ?? null;
  }
}
