module case_decoder (
    input logic [3:0] select,
    output logic [15:0] data_out
);

always_comb begin
    case(select)
    4'b0000: data_out = 16'b1111111111111110;
    4'b0001: data_out = 16'b1111111111111101;
    4'b0010: data_out = 16'b1111111111111011;
    4'b0011: data_out = 16'b1111111111110111;
    4'b0100: data_out = 16'b1111111111101111;
    4'b0101: data_out = 16'b1111111111011111;
    4'b0110: data_out = 16'b1111111110111111;
    4'b0111: data_out = 16'b1111111101111111;
    4'b1000: data_out = 16'b1111111011111111;
    4'b1001: data_out = 16'b1111110111111111;
    4'b1010: data_out = 16'b1111101111111111;
    4'b1011: data_out = 16'b1111011111111111;
    4'b1100: data_out = 16'b1110111111111111;
    4'b1101: data_out = 16'b1101111111111111;
    4'b1110: data_out = 16'b1011111111111111;
    4'b1111: data_out = 16'b0111111111111111;
    default: data_out = 16'b1111111111111111;
    endcase
end

endmodule