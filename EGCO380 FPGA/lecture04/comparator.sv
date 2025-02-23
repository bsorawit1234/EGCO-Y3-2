module magnitude_comparator_4bit (
  input [3:0] a,
  input [3:0] b,
  output reg a_gt_b,
  output reg a_lt_b,
  output reg a_eq_b
);

  always_comb begin
    if (a > b) begin
      a_gt_b <= 1;
      a_lt_b <= 0;
      a_eq_b <= 0;
    end else if (a < b) begin
      a_gt_b <= 0;
      a_lt_b <= 1;
      a_eq_b <= 0;
    end else begin
      a_gt_b <= 0;
      a_lt_b <= 0;
      a_eq_b <= 1;
    end
  end

endmodule