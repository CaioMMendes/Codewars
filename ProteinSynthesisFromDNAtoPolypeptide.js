function proteinSynthesis(dna) {
  // Transcribe
  const transcription = {
    "T": "A",
    "A": "U",
    "G": "C",
    "C": "G",
  }
  const length = dna.length
  const array = []
  for (let i = 0; i < length; i += 3) {
    let string = `${transcription[dna[i]] ?? ""}${
      transcription[dna[i + 1]] ?? ""
    }${transcription[dna[i + 2]] ?? ""}`
    array.push(string)
  }
  const rna = array.join(" ")
  // Translate
  // Note: A pre-loaded codonDict exists that takes 3-letter RNA keys and outputs amino acid names.
  const codons = {
    Ala: ["GCU", "GCC", "GCA", "GCG"],
    Leu: ["UUA", "UUG", "CUU", "CUC", "CUA", "CUG"],
    Arg: ["CGU", "CGC", "CGA", "CGG", "AGA", "AGG"],
    Lys: ["AAA", "AAG"],
    Asn: ["AAU", "AAC"],
    Met: ["AUG"],
    Asp: ["GAU", "GAC"],
    Phe: ["UUU", "UUC"],
    Cys: ["UGU", "UGC"],
    Pro: ["CCU", "CCC", "CCA", "CCG"],
    Gln: ["CAA", "CAG"],
    Ser: ["UCU", "UCC", "UCA", "UCG", "AGU", "AGC"],
    Glu: ["GAA", "GAG"],
    Thr: ["ACU", "ACC", "ACA", "ACG"],
    Gly: ["GGU", "GGC", "GGA", "GGG"],
    Trp: ["UGG"],
    His: ["CAU", "CAC"],
    Tyr: ["UAU", "UAC"],
    Ile: ["AUU", "AUC", "AUA"],
    Val: ["GUU", "GUC", "GUA", "GUG"],
    Stop: ["UAG", "UGA", "UAA"],
  }

  const array2 = array.map((val) => {
    for (let key in codons) {
      if (codons[key].some((item) => item === val)) {
        return key
      }
    }
    return ""
  })
  const protein = array2.filter((val) => val !== "").join(" ")
  return [rna, protein]
}
