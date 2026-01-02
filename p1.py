from collections import deque
def is_valid_move(row, col, M, N, grid):
    return 0 <= row < M and 0 <= col < N and grid[row][col] == 0
def min_moves_to_destination(M, N, grid, source, dest, move_rule):
    src_row, src_col = source
    dest_row, dest_col = dest
    x, y = move_rule
    if grid[src_row][src_col] == 1 or grid[dest_row][dest_col] == 1:
        return -1
    moves = [
        (x, y),          
        (y, -x),         
        (-y, x),         
        (-x, -y)         
    ]
    queue = deque([(src_row, src_col, 0)])  
    visited = set([(src_row, src_col)])
    while queue:
        row, col, moves_count = queue.popleft() 
        if (row, col) == (dest_row, dest_col):
            return moves_count
        for dx, dy in moves:
            new_row, new_col = row + dx, col + dy        
            if (is_valid_move(new_row, new_col, M, N, grid) and 
                (new_row, new_col) not in visited):
                visited.add((new_row, new_col))
                queue.append((new_row, new_col, moves_count + 1))
    return -1
M, N = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(M)]
source = list(map(int, input().split()))
dest = list(map(int, input().split()))
move_rule = list(map(int, input().split()))
result = min_moves_to_destination(M, N, grid, source, dest, move_rule)
print(result)