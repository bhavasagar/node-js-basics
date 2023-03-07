class Shape:
    def __init__(self, sides):
        self.sides = sides
    
    def iamamethodinshape(self):
        print("I just print here")

class Square(Shape):
    def iamamethodinshape(self):
        super().iamamethodinshape()
        print("I am from square, I only print here.")

class FiveLenSquare(Square):
    pass

sq = Square(4)

sq.iamamethodinshape()

dict_arr = [{'name':'abcd', "score": 10}, {'name': 'defg', "score": 9}]

dict_arr.sort(key = lambda x: x["score"], reverse=True)

print(dict_arr)