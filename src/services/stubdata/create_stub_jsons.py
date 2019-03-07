# Script to process raw fragment data, and populate 

import argparse
import json
import csv

def parse_arguments():
  parser = argparse.ArgumentParser()
  parser.add_argument("data", help = "<frag_id>-<user_id>")
  return parser.parse_args()

def create_label_json(frag_id, user_id):
  res = []

  csv_file = "./raw/" + frag_id + ".csv"
  with open(csv_file) as file:
    csv_reader = csv.reader(file, delimiter=',')
    l = 0
    for row in csv_reader:
      if l != 0:
        if row[1] == user_id:
          frag = { "x": int(row[4]), "y": int(row[5]), "label": row[6]}
          res.append(frag)
      l += 1
  
  output_file = "./label/" + frag_id + "-" + user_id + ".json"
  with open(output_file, 'w') as outfile:
    json.dump(res, outfile)

  return

if __name__ == '__main__':
  args = parse_arguments()
  f, u = args.data.split('-')
  create_label_json(f, u)
