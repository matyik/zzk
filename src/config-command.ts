import { Config, updateConfig, loadConfig } from './config';

export function configCommand(args: string[]) {
  const command = args[1];

  if (command === 'set') {
    const key = args[2] as keyof Config;
    const value = args.slice(3).join(' ');
    if (!key || !value) {
      console.error('Usage: vvk config set <key> <value>');
      process.exit(1);
    }
    // For boolean fields, parse the value
    let parsedValue: any = value;
    if (key === 'confirmCommand') {
      parsedValue = value.toLowerCase() === 'true' || value.toLowerCase() === 'y';
    }
    const updated = updateConfig({ [key]: parsedValue });
    console.log('Configuration updated:', updated);
  } else if (command === 'get') {
    const config = loadConfig();
    console.log('Current configuration:', config);
  } else if (command === 'list') {
    const config = loadConfig();
    console.log('Current configuration:', config);
  } else {
    console.error('Unknown config command. Use "set" or "get".');
  }
  process.exit(0);
}
