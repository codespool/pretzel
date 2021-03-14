import lowdb, { LowdbSync } from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

export class Config {
  ghApiKey: string | null = null;
  ghUsername: string | null = null;
  editorCommand = "code";
}

export class ConfigRepo {
  private static instance: ConfigRepo;
  private db: LowdbSync<Config>;
  private constructor() {
    this.db = lowdb(new FileSync("config.json"));
    this.db.defaults(new Config()).write();
  }

  public static getInstance(): ConfigRepo {
    if (!ConfigRepo.instance) {
      ConfigRepo.instance = new ConfigRepo();
    }
    return ConfigRepo.instance;
  }

  set(key: keyof Config, val: string) {
    this.db.set(key, val).write();
  }

  get(key: keyof Config): string | null {
    const val = this.db.get(key).value();
    return val ?? null;
  }
}
