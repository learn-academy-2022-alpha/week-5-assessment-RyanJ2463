# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
letter_t = 't'
def bev(array, letters)
    array.select do |value|
        if value.include?(letters) 
            value
        end
    end
end
p bev(beverages_array, letter_o)
p bev(beverages_array, letter_t)


# letter_o = 'o'
# # Expected output: ['coffee', 'soda water']
# letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']


# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100
def num(array)
    array.inject(0, :+)
end
p num(nums_array1)
p num(nums_array2)



# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
class Bike 
    def initialize(model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    def bike_info
        if @current_speed > 0
        "The #{@model} bike has #{@wheels} and is going #{@current_speed} mph."
        else @current_speed < 0
            "The #{@model} bike has #{@wheels} and is going 0 mph."
        end
    end
    def pedal_faster(num)
        @current_speed += num
    end
    def brake(num)
        @current_speed -= num
    end
end

my_bike = Bike.new("Trek")
p my_bike.bike_info
my_bike.pedal_faster(10)
p my_bike.bike_info
my_bike.pedal_faster(18)
p my_bike.bike_info
my_bike.brake(5)
p my_bike.bike_info
my_bike.brake(25)
p my_bike.bike_info
my_bike.brake(25)
p my_bike.bike_info


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
