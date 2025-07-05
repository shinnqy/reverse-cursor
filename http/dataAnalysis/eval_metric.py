import re
import argparse
from fuzzywuzzy import fuzz

def compute_metric_stmt(args):
  """
  Exact Match:         预测代码与目标代码是否完全一致
  Edit Similarity:     通过编辑距离计算相似度
  Identifier Matching: 预测代码中的标识符与目标代码中标识符的匹配程度
  """
  output = args.output
  ground_truth = args.ground_truth
  em = compute_exact_match(output, ground_truth)
  es = compute_edit_sim(output, ground_truth)
  return (em, es)

def remove_comments(code):
  code = re.sub(r'#.*', '', code)
  code = re.sub(r'//.*', '', code)
  return code

def compute_exact_match(output: str, ground_truth: str):
  output = remove_comments(output)
  ground_truth = remove_comments(ground_truth)

  output_lines = [l.strip() for l in output.split('\n') if l.strip()]
  ground_truth_lines = [l.strip() for l in ground_truth.split('\n') if l.strip()]

  em = int(output_lines == ground_truth_lines)
  return em

def compute_edit_sim(output: str, ground_truth: str):
  output = remove_comments(output)
  ground_truth = remove_comments(ground_truth)

  total = len(ground_truth)
  edit_sim = 0.0

  for ot, gt in zip(output, ground_truth):
    ot = ot.strip()
    gt = gt.strip()
    edit_sim += fuzz.ratio(ot, gt)

  return edit_sim / total

if __name__ == '__main__':
  parser = argparse.ArgumentParser()
  parser.add_argument('--output', type=str, required=True)
  parser.add_argument('--ground_truth', type=str, required=True)
  args = parser.parse_args()
  em, es = compute_metric_stmt(args)
  import json
  result = {
    'em': em,
    'es': es
  }
  print(json.dumps(result))