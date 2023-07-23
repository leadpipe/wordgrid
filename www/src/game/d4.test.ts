import {D4, d4Combine, d4Find, d4Flipped, d4Inverse, d4Rotation} from './d4';

describe('d4', () => {
  const all = Object.values(D4).filter(v => typeof v !== 'string') as D4[];
  const allFlipped = all.filter(d4 => d4Flipped(d4));
  const allUnflipped = all.filter(d4 => !d4Flipped(d4));

  it('rotation', () => {
    expect(d4Rotation(D4.E)).toBe(0);
    expect(d4Rotation(D4.R)).toBe(1);
    expect(d4Rotation(D4.R2)).toBe(2);
    expect(d4Rotation(D4.R3)).toBe(3);
    expect(d4Rotation(D4.F)).toBe(0);
    expect(d4Rotation(D4.RF)).toBe(1);
    expect(d4Rotation(D4.R2F)).toBe(2);
    expect(d4Rotation(D4.R3F)).toBe(3);
  });

  it('flip', () => {
    expect(d4Flipped(D4.E)).toBeFalse();
    expect(d4Flipped(D4.R)).toBeFalse();
    expect(d4Flipped(D4.R2)).toBeFalse();
    expect(d4Flipped(D4.R3)).toBeFalse();
    expect(d4Flipped(D4.F)).toBeTrue();
    expect(d4Flipped(D4.RF)).toBeTrue();
    expect(d4Flipped(D4.R2F)).toBeTrue();
    expect(d4Flipped(D4.R3F)).toBeTrue();
  });

  it('find', () => {
    expect(all.map(d4 => d4Find(d4Rotation(d4), d4Flipped(d4)))).toEqual(all);
  });

  it('inverse', () => {
    expect(d4Inverse(D4.E)).toBe(D4.E);
    expect(d4Inverse(D4.R)).toBe(D4.R3);
    expect(d4Inverse(D4.R2)).toBe(D4.R2);
    expect(d4Inverse(D4.R3)).toBe(D4.R);
    expect(d4Inverse(D4.F)).toBe(D4.F);
    expect(d4Inverse(D4.RF)).toBe(D4.RF);
    expect(d4Inverse(D4.R2F)).toBe(D4.R2F);
    expect(d4Inverse(D4.R3F)).toBe(D4.R3F);
  });

  describe('combine', () => {
    it('identity', () => {
      expect(all.map(d4 => d4Combine(D4.E, d4))).toEqual(all);
      expect(all.map(d4 => d4Combine(d4, D4.E))).toEqual(all);
    });

    it('inverses', () => {
      const allEs = all.map(() => D4.E);
      expect(all.map(d4 => d4Combine(d4, d4Inverse(d4)))).toEqual(allEs);
      expect(all.map(d4 => d4Combine(d4Inverse(d4), d4))).toEqual(allEs);
    });

    describe('rotation', () => {
      const rotations = allUnflipped.filter(d4 => d4 !== D4.E);

      describe('flipped', () => {
        allFlipped.forEach(f => {
          describe(D4[f], () => {
            rotations.forEach(r => {
              it(D4[r], () => {
                const rf = d4Combine(r, f);
                const fr = d4Combine(f, r);
                expect(d4Flipped(rf)).toBeTrue();
                expect(d4Flipped(fr)).toBeTrue();
                expect(d4Rotation(rf)).toBe(
                  (d4Rotation(r) + d4Rotation(f)) & 3
                );
                expect(d4Rotation(fr)).toBe(
                  (d4Rotation(f) - d4Rotation(r)) & 3
                );
              });
            });
          });
        });
      });

      describe('unflipped', () => {
        allUnflipped.forEach(a => {
          describe(D4[a], () => {
            rotations.forEach(b => {
              it(D4[b], () => {
                const ab = d4Combine(a, b);
                const ba = d4Combine(b, a);
                expect(ab).toBe(ba);
                expect(d4Flipped(ab)).toBeFalse();
                expect(d4Rotation(ab)).toBe(
                  (d4Rotation(a) + d4Rotation(b)) & 3
                );
              });
            });
          });
        });
      });
    });

    describe('flipping', () => {
      all.forEach(d4 => {
        it(D4[d4], () => {
          const flipped = d4Flipped(d4);
          const d4f = d4Combine(d4, D4.F);
          const fd4 = d4Combine(D4.F, d4);
          expect(d4Flipped(d4f)).toBe(!flipped);
          expect(d4Flipped(fd4)).toBe(!flipped);
          expect(d4Rotation(d4f)).toBe(d4Rotation(d4));
          expect(d4Rotation(fd4)).toBe(3 & (-d4Rotation(d4)));
        });
      });
    });
  });
});
