class AddLatitudeAndLongitudeToGeo < ActiveRecord::Migration
  def change
    add_column :geos, :latitude, :float
    add_column :geos, :longitude, :float
  end
end
