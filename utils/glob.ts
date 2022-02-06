import globSync from 'glob';

interface Options {
  cwd?: string;
}

export async function glob(
  pattern: string,
  options: Options = {}
): Promise<string[]> {
  return new Promise((res, rej) => {
    console.log('pattern', pattern);
    globSync(pattern, options, (error, success) => {
      if (error) {
        rej(error);
      }

      res(success);
    });
  });
}
