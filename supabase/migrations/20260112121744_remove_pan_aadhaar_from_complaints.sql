/*
  # Remove PAN and Aadhaar Fields from Citizen Complaints

  1. Changes
    - Drop `pan_card` column from `citizen_complaints` table
    - Drop `aadhaar_card` column from `citizen_complaints` table

  2. Security
    - Maintains existing RLS policies
    - No changes to security model

  3. Notes
    - These columns are no longer required for complaint submission
    - Existing data in these columns will be permanently deleted
*/

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'citizen_complaints' AND column_name = 'pan_card'
  ) THEN
    ALTER TABLE citizen_complaints DROP COLUMN pan_card;
  END IF;

  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'citizen_complaints' AND column_name = 'aadhaar_card'
  ) THEN
    ALTER TABLE citizen_complaints DROP COLUMN aadhaar_card;
  END IF;
END $$;