/*
  # Add PAN and Aadhaar Fields to Citizen Complaints

  1. Changes
    - Add `pan_card` column to `citizen_complaints` table
      - Type: text
      - Constraint: NOT NULL
      - Format: 10 characters (AAAAA9999A)
    - Add `aadhaar_card` column to `citizen_complaints` table
      - Type: text
      - Constraint: NOT NULL
      - Format: 12 digits (numeric)

  2. Security
    - Maintains existing RLS policies
    - No changes to security model
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'citizen_complaints' AND column_name = 'pan_card'
  ) THEN
    ALTER TABLE citizen_complaints ADD COLUMN pan_card text NOT NULL DEFAULT '';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'citizen_complaints' AND column_name = 'aadhaar_card'
  ) THEN
    ALTER TABLE citizen_complaints ADD COLUMN aadhaar_card text NOT NULL DEFAULT '';
  END IF;
END $$;

ALTER TABLE citizen_complaints ALTER COLUMN pan_card DROP DEFAULT;
ALTER TABLE citizen_complaints ALTER COLUMN aadhaar_card DROP DEFAULT;