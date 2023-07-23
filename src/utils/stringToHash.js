import crypto from 'crypto';

export const stringToHash = (uuid) => {
             
  const uuidBuffer = Buffer.from(uuid.replace(/-/g, ''), 'hex');

  const hash = crypto.createHash('sha1').update(uuidBuffer).digest('hex');

  const code = hash.substring(0, 5).toUpperCase();

  return code;
}