import Countries from "./countries"

const opts = Countries.map(
    (cntr) => <option key={cntr.key} value={cntr.cde}>{cntr.ctr}</option>
);

export default opts;
